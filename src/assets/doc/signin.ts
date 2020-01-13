export default {
  labels: {
    label: 'ログイン',
    email: 'メールアドレス',
    password: 'パスワード',
  },
  stateMaintenance: {
    id: 0,
    property: 'state',
    label: 'ログイン状態を14日間保持する',
  },
  buttons: {
    signin: { name: '--primary', label: 'ログイン', target: '/dashboard' },
  },
  social: [
    { name: 'Google', label: 'Googleでログイン', icon: 'google' },
    { name: 'Facebook', label: 'Facebookでログイン', icon: 'facebook' },
    { name: 'Yahoo', label: 'Yahoo!でログイン', icon: 'yahoo' },
  ],
  forgot: { label: 'パスワードを忘れた方はこちら', target: '/forgot_password' },
};
