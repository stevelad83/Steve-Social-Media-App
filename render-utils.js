export function renderProfile(profileObject) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');

    div.classList.add('profile-list-item');
    img.classList.add('avatar');
    a.classList.add('profile-link');
    p.classList.add('likes');

    if (profileObject.avatar_url === null) {
        img.src = './assets/PetDefaultImage.png';
    } else {
        img.src = profileObject.avatar_url;
    }
    img.alt = 'avatar';
    p.textContent = `👍 ${profileObject.likes}`;
    a.textContent = `${profileObject.username}`;
    a.href = `../profile/?id=${profileObject.id}`;

    div.append(a, img, p);
    return div;
}

export function renderMessages(profile) {
    const ul = document.createElement('ul');
    const header = document.createElement('h3');

    header.textContent = `Message feed for ${profile.username}`;

    ul.classList.add('messages');

    ul.append(header);

    for (let i = 0; i < profile.messages.length; i++) {
        const li = document.createElement('p');
        li.classList.add('message');

        const div = document.createElement('div');
        div.classList.add('message-info');

        const senderSpan = document.createElement('span');
        senderSpan.classList.add('from');
        senderSpan.textContent = profile.messages[i].sender;

        const dateSpan = document.createElement('span');
        dateSpan.classList.add('date-created');
        dateSpan.textContent = new Date(profile.messages[i].created_at).toLocaleString('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        });

        const text = document.createElement('p');
        text.classList.add('text');

        text.textContent = profile.messages[i].text;

        div.append(senderSpan, dateSpan);

        li.append(div, text);

        ul.append(li);
    }
    return ul;
}
