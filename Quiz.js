import React from 'react';

const Quiz = () => {
    return (
        <div>
            <h1>QUIZ</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'blue', fontSize: '18px' }}>Sr. No.</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'blue', fontSize: '18px' }}>Course Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'blue', fontSize: '18px' }}>Link</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'blue', fontSize: '18px' }}>Max. Coins 🪙</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>1</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>C++</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLSexe8_iT1OtrttwD2dHZarmYR5E4Cs4rJln57evcxEWtSqD7Q/viewform?usp=sf_link'>C++ Quiz</a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.1🪙</td>
                    </tr>
                    {/* Add more rows as needed */}
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>2</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Python</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLSe8X8dbE4inDb-MLcZPfs3npMY8nC_c9sEKCSQWPTI0BJxWFw/viewform?usp=sf_link'>Python Assignment</a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.1🪙</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>3</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>JavaScript</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLScXdfh-3rCG-fkcZqniyZHKm6I5bp7iX3ZESHlJRWbrXqV1Ww/viewform?usp=sf_link'>JavaScript Knowledge Assessment</a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.1🪙</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>4</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>HTML</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLSez3O32Jk-WWfbUaZR9o1KZ6pW0PmbhejcF5d4DtZPhpPxxsQ/viewform?usp=sf_link'>HTML Test</a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.1🪙</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>5</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Java</td>
                        <td><a href='https://docs.google.com/forms/d/e/1FAIpQLScHWiIvxxOYeCB3OgGrZ-R9gD7eGJkBa6Oo46jgkEY1VYCcYA/viewform?usp=sf_link'>Java Tutorial</a></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.1🪙</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Quiz;



