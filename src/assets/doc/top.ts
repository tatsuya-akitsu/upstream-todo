export default {
  copy: '1日のタスク管理を楽しく、<br>業務をスムーズに進める',
  list: [
    { icon: 'thunder', label: '日々、大量のタスクに追われている人' },
    { icon: 'calendar', label: 'タスク管理に悩んでいる人' },
    { icon: 'note', label: 'タスク管理を億劫に感じている人' },
  ],
  labels: {
    signin: 'アカウントをお持ちの方',
  },
  buttons: {
    signup: { name: '--secondary', label: 'アカウントをつくる', target: '/signup' },
    signin: { name: '--primary', label: 'ログイン', target: '/signin' },
  },
};
