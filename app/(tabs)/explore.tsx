import { SafeAreaView } from 'react-native-safe-area-context';
import {ThemedText} from '../../components/ThemedText'
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen(){
    return (
    <SafeAreaView>
        <ThemedView>
            <ThemedText>
                explore
            </ThemedText>
        </ThemedView>
    </SafeAreaView>);
}