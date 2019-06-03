import screenActionType from '../actionType/screen';
console.log(screenActionType);
export default {
    dragStart: (data) => {
        return {
            type: screenActionType.DRAG_START,
            data: data
        }
    }
}