import React from 'react';


const Leaderboard = () => {
    return (
        <div>
            <h1>LEADERBOARD</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'red', fontSize: '18px' }}>Rank</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'red', fontSize: '18px' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'red', fontSize: '18px' }}>ETH coins</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: 'red', fontSize: '18px' }}>LearnCoins</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>1</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Shubham Singh</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>5.05</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>505</td>
                    </tr>
                    {/* Add more rows as needed */}
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>2</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Aaryan Sanghani</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>3.30</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>330</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>3</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Viraj Mankani</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>1.50</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>150</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>4</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Raunak Thanawala</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.80</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>80</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>5</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Palash Shah</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.70</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>70</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>6</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Palakshi Maheshwari</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.50</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>50</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>7</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Neil Shah</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>10</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>8</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Ahaan Desai</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.09</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>9</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>9</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Mahi Palimkar</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.08</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>8</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>10</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>Siddhesh Pandey</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>0.01</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', fontSize: '16px' }}>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;


