import NewTodoForm from "@/components/NewTodoForm"

function DashboardLayout({ children }) {
    return (
        <div>
            <div>DashboardLayout</div>
            <div>
                <NewTodoForm />
            </div>
            <div>{children}</div>
        </div>
    )
}

export default DashboardLayout