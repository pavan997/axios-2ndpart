export default function Todolist({ list, deleteTodo })
{

    return (
        <>
             {list.map((e) => 
                <div key={e.id}>
                    {e.name}
                    
                     <button onClick={() => {
                         deleteTodo(e.id);
                     }}>Delete</button>
                </div>
            )}
            </>
  )
}