const ModalWindow = {
    init() {
        document.body.addEventListener("click", e => {
                if (e.target.classList.contains("modal")) {
					document.body.removeChild(e.target);
            }
        });
    },

    getHtmlTemplate(modalOptions) {
        return `
			<div class="modal">
				<div class="window"> 
					<div class="title">${m.title}</div>
					<div class="content"><div>${m.content1}</div><div>${m.content2}</div></div>
				</div>
			</div>
        `;
    },

    openModal(modalOptions = {}) {
        m = Object.assign({
            title: 'pustota.....',
            content1: 'pustota....',
			content2: 'pustota.....'
        }, modalOptions);

        const modalTemplate = this.getHtmlTemplate(m);
        document.body.insertAdjacentHTML("afterbegin", modalTemplate);
    },
};

document.addEventListener("DOMContentLoaded", () => ModalWindow.init());
