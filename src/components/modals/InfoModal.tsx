import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="TermoHOTS" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        TermoHOTS is a version based on Heroes of the Storm, Blizzard's moba. It is limited to only the names of the heroes.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word related to HOTS in 6 guesses. Only names of heroes will be recognized. 
        After each guess, the color of the tiles will change to show how close your guess was to the word.
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
        The letter S is in the word and in the correct spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="E" />
        <Cell value="E" />
        <Cell value="R" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word but in the wrong spot.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="B" />
        <Cell value="U" />
        <Cell value="T" />
        <Cell isRevealing={true} isCompleted={true} value="C" status="absent" />
        <Cell value="H" />
        <Cell value="E" />
        <Cell value="R" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter C is not in the word in any spot.
      </p>

      <p className="p-3">
      <hr></hr>
      </p>

      <h2 className="text-center text-lg leading-6 font-medium text-gray-900 dark:text-white" id="headlessui-dialog-title-7">Sobre</h2>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
       Based on the code from
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold"
          target="_blank"
          rel="nofollow"
          > Cwackerfuss</a>
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
         Adapted by Brazilian Gustavo "Gunnar"
      </p>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://linktr.ee/CLMTgaming"
          className="font-bold"
          target="_blank"
          rel="nofollow"
          >Follow Calamity Gaming</a>.
      </p>
    </BaseModal>
  )
}
