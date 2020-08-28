import moment from 'moment'

export const endDateValidation = (startDateWatcher: any) => (date: any) => {
  const startDate = moment(startDateWatcher)
  const endDate = moment(date)

  return startDateWatcher && endDate.isAfter(startDate)
}

export const TaskValidations = {
  title: { minLength: 5, required: true },
  startDate: { required: true },
  endDate: { required: true },
  description: { minLength: 10, required: true }
}
