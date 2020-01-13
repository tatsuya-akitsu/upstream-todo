export default {
  tabs: [
    { label: '募集求人リスト', name: 'Project', route: '/admin/projects' },
    { label: '提案メンバーリスト', name: 'Member', route: '/admin/members' },
  ],
  navi: [
    { name: 'Email', route: '/admin/message' },
    { name: 'Notification', route: '/admin/notification' },
  ],
  labels: {
    username: '江崎修平',
    recommend: {
      title: 'おすすめメンバー告知',
      text:
        'ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。',
    },
    search: 'キーワード検索',
    searchPlaceholder: '最新順',
  },
  sidenav: {
    first: [
      { label: '企業', name: 'company', route: '' },
      { label: '募集求人', name: 'recruit', route: '' },
      { label: '請求書', name: 'invoice', route: '' },
      { label: 'メッセージ', name: 'message', route: '' },
    ],
    second: [
      { label: 'メンバー', name: 'member', route: '/admin/members' },
      { label: '請求書', name: 'invoice', route: '' },
      { label: 'メッセージ', name: 'message', route: '' },
    ],
  },
  list: [
    {
      title: '職種',
      data: [
        { label: 'フロントエンドエンジニア', property: 'frontend-' },
        { label: 'バックエンドエンジニア', property: 'backend-' },
        { label: 'サーバーサイドエンジニア', property: 'serverside-' },
        { label: 'デザイナー', property: 'designer-' },
      ],
    },
    {
      title: 'スキル',
      data: [
        { label: 'PHP', property: 'php-' },
        { label: 'JavaScript', property: 'javascript-' },
        { label: 'go', property: 'go-' },
        { label: 'AWS', property: 'aws-' },
        { label: 'Python', property: 'python-' },
        { label: 'Photoshop', property: 'photoshop-' },
      ],
    },
    {
      title: '働き方',
      data: [
        { label: '適時打ち合わせ+リモート', property: 'remote-' },
        { label: '常駐', property: 'resident-' },
        { label: '週末（土日のみ）', property: 'weekend-' },
      ],
    },
    {
      title: '稼働時間',
      data: [
        { label: '16h未満', property: 'min16-' },
        { label: '16~32h（週1日未満）', property: '16to32-' },
        { label: '32~64h（週1~2日）', property: '32to64-' },
        { label: '64~96h（週2~3日）', property: '64to96-' },
        { label: '96~128h（週3~4日）', property: '96to128-' },
        { label: '週128h以上（週4日以上）', property: 'max128-' },
      ],
    },
    {
      title: '時給換算',
      data: [
        { label: '2,000円未満', property: 'min2000-' },
        { label: '2,000~3,000円/h', property: '2000to3000-' },
        { label: '3,000~4,000円/h', property: '3000to4000-' },
        { label: '4,000〜5,000円/h', property: '4000to5000-' },
      ],
    },
  ],
  buttons: {
    addMember: { label: '新規メンバーを追加する', target: '/admin/member_register' }
  },
};
