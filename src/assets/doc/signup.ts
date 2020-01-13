export default {
  labels: {
    label: '新規登録',
    name: 'ユーザー名',
    email: 'メールアドレス',
    password: 'パスワード',
    privacy: 'に同意する',
  },
  privacyPolicy: {
    id: 0,
    property: 'privacy',
    label: 'プライバシーポリシー',
  },
  buttons: {
    signup: { name: '--primary', label: '登録する', target: '/dashboard' },
  },
  social: [
    { name: 'Google', label: 'Googleでログイン', icon: 'google' },
    { name: 'Facebook', label: 'Facebookでログイン', icon: 'facebook' },
    { name: 'Yahoo', label: 'Yahoo!でログイン', icon: 'yahoo' },
  ],
  forgot: { label: 'パスワードを忘れた方はこちら', target: '/forgot_password' },
};
