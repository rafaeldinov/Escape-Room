export const getQuestLevel = (level: string) => {
  switch(level) {
    case 'easy':
      return 'простой';
    case 'medium':
      return 'средний';
    default:
      return 'сложный';
  }
};
