import {calculatePasswordStrength} from "../src/password-strength";

test('Very weak password with only digits under 8 characters', () => {
    expect(calculatePasswordStrength('12345')).toBe("Very Weak");
});

test('Very weak password with only lower case letters under 8 characters', () => {
    expect(calculatePasswordStrength('abcde')).toBe("Very Weak");
});

test('Very weak password with only upper case letters under 8 characters', () => {
    expect(calculatePasswordStrength('NHTRE')).toBe("Very Weak");
});

test('Very weak password with only special symbols under 8 characters', () => {
    expect(calculatePasswordStrength('/*-+!')).toBe("Very Weak");
});

test('Very weak password with lower and upper casse letters under 8 characters', () => {
    expect(calculatePasswordStrength('abcDE')).toBe("Very Weak");
});

test('Very weak password with special symbols and digits under 8 characters', () => {
    expect(calculatePasswordStrength('/*12!')).toBe("Very Weak");
});

test('Weak password with special symbols, digits and lower case letters under 8 characters', () => {
    expect(calculatePasswordStrength('abc12!')).toBe("Weak");
});

test('Weak password with special symbols, digits and upper case letters under 8 characters', () => {
    expect(calculatePasswordStrength('ABC12!')).toBe("Weak");
});

test('Weak password with digits, lower and upper case letters under 8 characters', () => {
    expect(calculatePasswordStrength('ABHjfu1')).toBe("Weak");
});

test('Weak password with special symbols, lower and upper case letters under 8 characters', () => {
    expect(calculatePasswordStrength('hdfLUY!')).toBe("Weak");
});

test('Moderate password with special symbols, lower and upper case letters over 8 characters', () => {
    expect(calculatePasswordStrength('AHYnju!/*')).toBe("Moderate");
});

test('Moderate password with digits, lower and upper case letters over 8 characters', () => {
    expect(calculatePasswordStrength('AHYnju123')).toBe("Moderate");
});

test('Moderate password with special symbols, digits, lower and upper case letters under 8 characters', () => {
    expect(calculatePasswordStrength('An13u!/')).toBe("Moderate");
});

test('Strong password with special symbols, digits, lower and upper case letters over 8 characters', () => {
    expect(calculatePasswordStrength('An13u!/*-*/*/')).toBe("Strong");
});

