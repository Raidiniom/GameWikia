import { RegisterStyle } from "@/styles/indexstyle";
import { Colors } from "@/styles/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { supabase } from '@/lib/supabase'

export default function Register() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [msg, setMsg] = useState('')
    const [strength, setStrength] = useState({
        score: 0,
        label: "None",
        strengthClass: "none",
        requirements: {
            length: false,
            uppercase: false,
            lowercase: false,
            number: false,
            special: false
        }
    });

    const router = useRouter()

    const checkPasswordStrength = (password: string) => {
        let score = 0;
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };

        // Calculate score
        if (requirements.length) score += 1;
        if (requirements.uppercase) score += 1;
        if (requirements.lowercase) score += 1;
        if (requirements.number) score += 1;
        if (requirements.special) score += 1;

        // Determine strength label and color
        let label = "Weak";
        let strengthClass = "weak";
        
        if (score >= 4) {
            label = "Strong";
            strengthClass = "strong";
        } else if (score >= 3) {
            label = "Medium";
            strengthClass = "medium";
        }

        setStrength({
            score,
            label,
            strengthClass,
            requirements
        });
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        checkPasswordStrength(text);
    };

    const getStrengthPercentage = () => {
        if (password.length === 0) return 0;
        const maxScore = 5;
        return (strength.score / maxScore) * 100;
    };

    const getStrengthColor = () => {
        switch(strength.strengthClass) {
            case 'strong':
                return Colors.jade_green;
            case 'medium':
                return Colors.golden_orange;
            case 'weak':
                return Colors.brown_red;
            default:
                return Colors.pearl_aqua;
        }
    };

    const getStrengthTextColor = () => {
        switch(strength.strengthClass) {
            case 'strong':
                return Colors.mint_highlight;
            case 'medium':
                return Colors.vanilla_custard;
            case 'weak':
                return Colors.vanilla_custard;
            default:
                return Colors.pearl_aqua;
        }
    };

    const handleMsg = (success: boolean, message: string) => {
        setMsg(message);
    }

    const handleRegister = async () => {
        if (!email || !username || !password || !confirm) {
            handleMsg(false, "All fields are required!");
            return;
        }

        if (password !== confirm) {
            handleMsg(false, "Passwords do not match!");
            return;
        }

        if (strength.score < 3) {
            handleMsg(false, "Password is too weak! Please use a stronger password.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                },
            },
        })
        
        if (data) {
            handleMsg(true, "Registration successful! Please check your email to verify your account.");
            router.push('/');
        }
    }

    const RequirementCheck = ({ label, met }: { label: string; met: boolean }) => {
        return (
            <SafeAreaView style={RegisterStyle.requirementItem} edges={['top', 'bottom']} >
                <View style={[
                    RegisterStyle.requirementIndicator,
                    { backgroundColor: met ? Colors.jade_green : Colors.brown_red }
                ]}>
                    <Text style={{ 
                        color: Colors.ink_black,
                        fontSize: 10,
                        fontWeight: 'bold'
                    }}>
                        {met ? '✓' : '✗'}
                    </Text>
                </View>
                <Text style={[
                    RegisterStyle.requirementText,
                    { color: met ? Colors.pearl_aqua : Colors.burnt_caramel }
                ]}>
                    {label}
                </Text>
            </SafeAreaView>
        );
    };

    return (
        <View style={RegisterStyle.bodyContainer} >            
            <View style={RegisterStyle.registerForm} >
                <Text style={RegisterStyle.welcomeText} >Register</Text>

                <TextInput style={RegisterStyle.userInput}
                    placeholder="gamewikireader@email.com"
                    placeholderTextColor={`${Colors.vanilla_custard}80`}
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <TextInput style={RegisterStyle.userInput}
                    placeholder="gamewikireader"
                    placeholderTextColor={`${Colors.vanilla_custard}80`}
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />

                <TextInput style={RegisterStyle.userInput}
                    placeholder="Enter password"
                    placeholderTextColor={`${Colors.vanilla_custard}80`}
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                />

                {/* Password Strength Indicator */}
                {password.length > 0 && (
                    <View style={RegisterStyle.strengthContainer}>
                        {/* Strength Bar */}
                        <View style={RegisterStyle.strengthBarContainer}>
                            <View style={[
                                RegisterStyle.strengthBar,
                                { 
                                    width: `${getStrengthPercentage()}%`,
                                    backgroundColor: getStrengthColor()
                                }
                            ]} />
                        </View>
                        
                        {/* Strength Label */}
                        <View style={RegisterStyle.strengthLabelContainer}>
                            <Text style={[
                                RegisterStyle.strengthLabel,
                                { color: getStrengthTextColor() }
                            ]}>
                                Strength: {strength.label}
                            </Text>
                            <Text style={RegisterStyle.strengthScore}>
                                Score: {strength.score}/5
                            </Text>
                        </View>

                        {/* Requirements Checklist */}
                        <View style={RegisterStyle.requirementsContainer}>
                            <Text style={RegisterStyle.requirementsTitle}>
                                Password Requirements:
                            </Text>
                            
                            <RequirementCheck 
                                label="At least 8 characters" 
                                met={strength.requirements.length} 
                            />
                            <RequirementCheck 
                                label="Contains uppercase letter" 
                                met={strength.requirements.uppercase} 
                            />
                            <RequirementCheck 
                                label="Contains lowercase letter" 
                                met={strength.requirements.lowercase} 
                            />
                            <RequirementCheck 
                                label="Contains number" 
                                met={strength.requirements.number} 
                            />
                            <RequirementCheck 
                                label="Contains special character" 
                                met={strength.requirements.special} 
                            />
                        </View>
                    </View>
                )}

                <TextInput style={RegisterStyle.userInput}
                    placeholder="Confirm password"
                    placeholderTextColor={`${Colors.vanilla_custard}80`}
                    value={confirm}
                    onChangeText={setConfirm}
                    secureTextEntry
                />

                {/* Password Match Check */}
                {confirm.length > 0 && (
                    <View style={RegisterStyle.matchCheckContainer}>
                        <View style={[
                            RegisterStyle.matchIndicator,
                            { backgroundColor: password === confirm ? Colors.jade_green : Colors.brown_red }
                        ]}>
                            <Text style={{ 
                                color: Colors.ink_black,
                                fontSize: 10,
                                fontWeight: 'bold'
                            }}>
                                {password === confirm ? '✓' : '✗'}
                            </Text>
                        </View>
                        <Text style={[
                            RegisterStyle.matchText,
                            { color: password === confirm ? Colors.pearl_aqua : Colors.burnt_caramel }
                        ]}>
                            Passwords {password === confirm ? 'match' : 'do not match'}
                        </Text>
                    </View>
                )}

                <Pressable 
                    onPress={handleRegister}
                    style={({ pressed }) => [
                        RegisterStyle.registerButton, 
                        pressed && RegisterStyle.registerButtonPressed,
                        (!email || !username || !password || !confirm || strength.score < 3) && {
                            opacity: 0.6
                        }
                    ]} 
                >
                    <Text style={RegisterStyle.registerText}>Confirm</Text>
                </Pressable>

                {/* Back to Login */}
                <Pressable 
                    onPress={() => router.push('/')}
                    style={RegisterStyle.backToLoginButton}
                >
                    <Text style={RegisterStyle.backToLoginText}>
                        Already have an account? Login here
                    </Text>
                </Pressable>

                {/* Message Display */}
                {msg ? (
                    <Text style={[
                        msg.includes("successful") 
                            ? RegisterStyle.successMessage 
                            : RegisterStyle.errorMessage
                    ]}>
                        {msg}
                    </Text>
                ) : null}
            </View>
        </View>
    )
}