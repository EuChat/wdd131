const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const chapter = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', function(){
    if (input.value.trim() !== '') {
        chapter.textContent = input.value ;
        deleteButton.textContent = '❌';
        chapter.append(deleteButton);
        list.append(chapter);

        deleteButton.addEventListener('click', function(){
            list.removeChild(chapter);
            input.focus();
        });
        
        input.value = '';
        input.focus();
    }
    else{
        input.focus();
    }
});
