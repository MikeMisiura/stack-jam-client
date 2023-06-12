export default function FormInput(value: string, type?: string) {

    if (!type) {type = "text"}

    return (
        <>
            <span>${value}  </span>
            <input
                placeholder="Enter Password"
                type={type}
                name={value}
                value={value}
                // onChange={e => setPassword(e.target.value)}
            />
        </>
    )
};