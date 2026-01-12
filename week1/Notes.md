**STYLING METHODS     
{/* Inline Styling */}     
<Text style={{ fontSize: 12, color: 'blue'}}>Inline</Text>     
{/* Style Array - combines multiple styles */}     
<Text style={[styles.text, styles.bold]}>Style Array</Text>     
{/* Conditional Styling */}     
<Text style={{ color: isHighlighted ? 'red' : 'black' }}>Conditional Styling</Text>     
{/* Override with inline */}     
<Text style={[styles.body, { fontSize: 20 }]}>Override with inline</Text>     
