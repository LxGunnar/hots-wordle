import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como Jogar TermoHOTS" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivinhe a palavra relacionada ao jogo Heroes of the Storm em 6 tentavitas. 
        Após cada palpite, a cor das peças mudará para mostrar quão próximo seu palpite estava da palavra.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Modo de Jogar: Todas as palavras serão em Português. Você poderá usar palavras do vocábulario a fim de tentar acertar.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="S"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="M" />
        <Cell value="U" />
        <Cell value="R" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra S está na palavra e no local correto.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="O" />
        <Cell value="B" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="J"
          status="present"
        />
        <Cell value="E" />
        <Cell value="T" />
        <Cell value="I" />
        <Cell value="V" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra J está presente na palavra, mas no lugar errado.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="B" />
        <Cell value="A" />
        <Cell value="S" />
        <Cell isRevealing={true} isCompleted={true} value="I" status="absent" />
        <Cell value="C" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra I não está na palavra em nenhum lugar.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
