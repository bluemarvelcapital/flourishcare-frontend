import { useSessionStorage } from "usehooks-ts"

export const useCompletedSteps = () => {
  const [completedSteps, setCompletedSteps] = useSessionStorage(
    "completedSteps",
    {
      nationalForm: [false, false, false, false],
      internationalForm: [false, false, false, false],
    }
  )

  const completeStep = (
    form: "nationalForm" | "internationalForm",
    step: number
  ) => {
    const newCompletedSteps = { ...completedSteps }
    newCompletedSteps[form][step] = true
    setCompletedSteps(newCompletedSteps)
  }

  return { completedSteps, completeStep, setCompletedSteps }
}
