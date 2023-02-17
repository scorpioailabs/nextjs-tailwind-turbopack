// generate a nextjs component using typescript
'use client'
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
// write tailwind css for card
const cardStyle = 'bg-white shadow-md rounded-lg p-4';
// write tailwind css for card content
const cardContentStyle = 'flex flex-col';
// write tailwind css for card title
const cardTitleStyle = 'text-xl font-bold mb-2';
// write tailwind css for card description
const cardDescriptionStyle = 'text-gray-500';
// write tailwind css for card button
const cardButtonStyle = 'bg-blue-500 text-white font-bold py-2 px-4 rounded';
// write tailwind css for card button container
const cardButtonContainerStyle = 'mt-4';
// write tailwind css for card button text
const cardButtonTextStyle = 'text-center';
// write tailwind css for card button icon
const cardButtonIconStyle = 'w-4 h-4 mr-2';
// write tailwind css for card button icon container
const cardButtonIconContainerStyle = 'flex justify-center items-center';
// write tailwind css for card button icon text container
const cardButtonIconTextContainerStyle = 'flex justify-center items-center';

// write a react component
const TestCard = () => {
    return (
        <Card className={cardStyle}>
            <CardContent className={cardContentStyle}>
                <Typography className={cardTitleStyle}>
                    Card Title
                </Typography>
                <Typography className={cardDescriptionStyle}>
                    Card Description
                </Typography>
                <div className={cardButtonContainerStyle}>
                    <button className={cardButtonStyle}>
                        <div className={cardButtonIconContainerStyle}>
                            <div className={cardButtonIconTextContainerStyle}>
                                <svg
                                    className={cardButtonIconStyle}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v12h12V3H5zm4 4a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v4a1 1 0 002 0V8a1 1 0 00-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className={cardButtonTextStyle}>
                                    Button Text
                                </span>
                            </div>
                        </div>
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default TestCard;