import React, { useState } from 'react';

enum PasswordStrength {
  Weak = 'Fraca',
  Medium = 'Média',
  Strong = 'Forte'
}

const checkPasswordStrength = (password: string): PasswordStrength => {
  if (password.length < 6) {
    return PasswordStrength.Weak;
  }
  
  if (/\d/.test(password) && /[a-zA-Z]/.test(password)) {
    return PasswordStrength.Strong;
  }
  
  return PasswordStrength.Medium;
}

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const strength = checkPasswordStrength(password);
    alert(`Força da senha: ${strength}`);
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Senha:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Validar Senha</button>
    </form>
  );
}

export default PasswordValidator;
