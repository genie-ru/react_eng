
const getTheYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}
const getTheTime = () => {
    const newDate = new Date();
    return newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
}

const Header = () => (
    <>
        <div>
            <h3>The date is {getTheYear()}</h3>
            <h3>The time is {getTheTime()}</h3>
        </div>
    </>
)

export default Header;