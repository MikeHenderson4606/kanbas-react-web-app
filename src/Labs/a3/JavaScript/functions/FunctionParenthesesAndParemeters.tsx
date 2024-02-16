

function FunctionParenthesesAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <div>
            <h3>Function Parentheses and Parameters</h3>
            twoSquared = {twoSquared} <br />
            square(2) = {square(2)} <br />
            threePlusOne = {threePlusOne} <br />
            plusOne = {plusOne(3)}
        </div>
    );
}

export default FunctionParenthesesAndParameters;