export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Bom trabalho!', 'Parabéns', 'Muito Bem!']
export const GAME_COPIED_MESSAGE = 'Jogo copiado para a área de transferência'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Letras insuficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode só pode ser ativado no início!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para melhor visão de cores'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição das Partidas'
export const NEW_WORD_TEXT = 'Nova palavra em:'
export const SHARE_TEXT = 'Compartilhar'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results. This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.'
export const MIGRATE_BUTTON_TEXT = 'Transferir'
export const MIGRATE_DESCRIPTION_TEXT =
  'Clique aqui para transferir suas estatísticas para um novo dispositivo.' 
export const TOTAL_TRIES_TEXT = 'Partidas Jogadas'
export const SUCCESS_RATE_TEXT = 'Taxa de acerto'
export const CURRENT_STREAK_TEXT = 'Sequência Atual'
export const BEST_STREAK_TEXT = 'Melhor Sequência'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."
