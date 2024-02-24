import { DataGrid as MaterialUIGridComponent } from '@mui/x-data-grid'
import React from 'react'



interface ITGGridProps extends React.ComponentProps<typeof MaterialUIGridComponent> {

}

function ITGGrid(props: ITGGridProps) {
  return (<>
    <MaterialUIGridComponent {...props} />
    </>
    )
}

export default ITGGrid