import React from 'react'


import { Container } from './styles'

interface IFeedbackBoxProps {
    title: string;
    description: string
    footerText: string
    icon: string
}

const FeedbackBox: React.FC<IFeedbackBoxProps> = ({
    title,
    description,
    footerText,
    icon
}) => (
    <Container>
        <header>
            <h1>
                {title}
                <img src={icon} alt={title} />
            </h1>
            <p>{description}</p>
        </header>
        <footer>
            <span>{footerText}</span>
        </footer>
    </Container>
)

export default FeedbackBox