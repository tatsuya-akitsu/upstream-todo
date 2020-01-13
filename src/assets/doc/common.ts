export default {
  labels: {
    footer: {
      copyright: '&copy; upstream All Rights Reserved.',
      list: [
        { label: '利用規約', target: '' },
        { label: 'プライバシーポリシー', target: '' },
        { label: 'お問い合わせ', target: '' },
        { label: '開発者について', target: '' },
      ],
    },
    header: {
      list: [
        { label: '今日', target: '', name: 'today' },
        { label: '次の1週間', target: '', name: 'nextWeek' },
        { label: 'ポモドーロ', target: '', name: 'pomodoro' },
        { label: 'チャート', target: '', name: 'chart' },
        { label: 'カンバン', target: '', name: 'kanban' },
      ],
    },
  },
  buttons: {
    header: {
      signup: { name: '--primary', label: '新規登録はこちら', target: '/signup' },
      signin: { name: '--primary', label: 'ログイン', target: '/signin' },
    },
  },
};
