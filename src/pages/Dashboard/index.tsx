import React, { useMemo, useState } from 'react'
import grinningImg from '../../assets/grinning.svg'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'

import ContentHeader from '../../components/ContentHeader'
import FeedbackBox from '../../components/FeedbackBox'
import HistoryBox from '../../components/HistoryBox'
import PieChartBox from '../../components/PieChartBox'
import SelectInput from '../../components/SelectInput'
import WalletBox from '../../components/WalletBox'

import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'

import listOfMonths from '../../utils/months'

import { Container, Content } from './styles'

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1)
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear())

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })

  }, [])

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    })
  }, [])

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount! Amount must be number.')
        }
      }
    })
    return total
  }, [monthSelected, yearSelected])

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount! Amount must be number.')
        }
      }
    })
    return total
  }, [monthSelected, yearSelected])

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;

  }, [totalGains, totalExpenses])

  const feedback = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        icon: sadImg,
        description: "Sua carteira está negativa",
        footerText: "Neste mês, você gastou mais do que deveria"
      }
    } else if (totalBalance === 0) {
      return {
        title: "Uufa!",
        icon: grinningImg,
        description: "Esse mês foi por pouco",
        footerText: "Tome cuidado, evite gastos desnecessários"
      }
    } else {
      return {
        title: "Muito bem!",
        icon: happyImg,
        description: "Sua carteira está positiva",
        footerText: "Continue assim. Considere investir o seu saldo."
      }
    }

  }, [totalBalance])

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses

    const percentGains = (totalGains / total) * 100
    const percentExpenses = (totalExpenses / total) * 100

    const data = [
      {
        name: "Entradas",
        value: percentGains,
        percent: Number(percentGains.toFixed(0)),
        color: '#F7931B'
      },
      {
        name: "Saídas",
        value: percentExpenses,
        percent: Number(percentExpenses.toFixed(0)),
        color: '#EE4C4E'
      }
    ]

    return data

  }, [totalGains, totalExpenses])

  const historyData = useMemo(() => {
    return listOfMonths.map((_, month) => {

      let amountInput = 0
      gains.forEach(gain => {
        const date = new Date(gain.date)
        const gainMonth = date.getMonth();
        const gainYear = date.getFullYear()

        if (gainMonth === month && gainYear === yearSelected) {
          try {
            amountInput += Number(gain.amount)
          } catch {
            throw new Error('amountInput is invalid. AmountInput must be valid number')
          }
        }
      })

      let amountOutput = 0
      expenses.forEach(expense => {
        const date = new Date(expense.date);
        const expenseMonth = date.getMonth();
        const expenseYear = date.getFullYear();

        if (expenseMonth === month && expenseYear === yearSelected) {
          try {
            amountOutput += Number(expense.amount)
          } catch {
            throw new Error('amountOutput is invalid. amountOutput must be valid number')
          }
        }
      });
      return {
        monthNumber: month,
        month: listOfMonths[month].substr(0, 3),
        amountInput,
        amountOutput
      }
    })
      .filter(item => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear()

        return (yearSelected === currentYear && item.monthNumber <= currentMonth)
          || (yearSelected < currentYear)
      })
  }, [yearSelected])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch {
      throw new Error('Invalid month value. Is accept 0 - 24.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch {
      throw new Error('Invalid year value. Is accept integer numbers.')
    }
  }

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={months} onChange={(e) => handleMonthSelected(e.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={(e) => handleYearSelected(e.target.value)} defaultValue={yearSelected} />
      </ContentHeader>

      <Content>
        <WalletBox
          title="saldo"
          amount={totalBalance}
          footerLabel="atualizado com base nas entradas de saídas"
          icon="dollar"
          color="#4E41F0"
        />

        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas de saídas"
          icon="arrowUp"
          color="#F7931B"
        />

        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerLabel="atualizado com base nas entradas de saídas"
          icon="arrowDown"
          color="#E44C4E"
        />

        <FeedbackBox
          title={feedback.title}
          icon={feedback.icon}
          description={feedback.description}
          footerText={feedback.footerText}
        />

        <PieChartBox data={relationExpensesVersusGains} />

        <HistoryBox
          data={historyData}
          lineColorAmountInput="#f7931b"
          lineColorAmountOutput="#e44c4e"
        />
      </Content>

    </Container >
  )
}

export default Dashboard