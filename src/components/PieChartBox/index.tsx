import React from 'react'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import { Container, LegendContainer, SideLeft, Legend, SideRight } from './styles'

interface IPieChartsProps {
    data: {
        name: string
        value: number
        percent: number
        color: string
    }[]
}

const PieChartBox: React.FC<IPieChartsProps> = ({ data }) => (
    <Container>
        <SideLeft>
            <h2>Relaçao</h2>
            <LegendContainer>
                {
                    data.map((indicator) => (
                        <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                        </Legend>
                    ))
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        labelLine={false}
                        dataKey="percent"
                    >
                        {
                            data.map((indicator) => (
                                <Cell
                                    key={indicator.name}
                                    fill={indicator.color}
                                />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
)

export default PieChartBox