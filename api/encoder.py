class Encoder:
    @staticmethod
    def caesar_basic(message, secret_number):
        # No ord() or chr(), not synced to unicode mapping so will not shift non-alpha chars
        uppies = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        lowies = "abcdefghijklmnopqrstuvwxyz"
        secret_message = ""
        
        for char in message:
            if char in uppies:
                oldie = uppies.index(char)
                shift = (secret_number + oldie) % 26
                newey = uppies[shift]
                secret_message += newey
            elif char in lowies:
                oldie = lowies.index(char)
                shift = (secret_number + oldie) % 26
                newey = lowies[shift]
                secret_message += newey
            else:
                secret_message += char
        return secret_message
    
    @staticmethod
    def caesar_better(message, secret_number):
        secret_message = ""
        
        for char in message:
            if char.isalpha():
                start = ord("a") if char.islower() else ord("A")
                print("start", start)
                shift = (ord(char) - start + secret_number) % 26
                print("shift", shift)
                secret_message += chr((start + shift))
            else:
                secret_message += char
        return secret_message



