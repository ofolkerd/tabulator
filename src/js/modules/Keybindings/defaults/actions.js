export default {
	keyBlock:function(e){
		e.stopPropagation();
		e.preventDefault();
	},
	scrollPageUp:function(e){
		var rowManager = this.table.rowManager,
		newPos = rowManager.scrollTop - rowManager.element.clientHeight;

		e.preventDefault();

		if(rowManager.displayRowsCount){
			if(newPos >= 0){
				rowManager.element.scrollTop = newPos;
			}else{
				rowManager.scrollToRow(rowManager.getDisplayRows()[0]);
			}
		}

		this.table.element.focus();
	},
	scrollPageDown:function(e){
		var rowManager = this.table.rowManager,
		newPos = rowManager.scrollTop + rowManager.element.clientHeight,
		scrollMax = rowManager.element.scrollHeight;

		e.preventDefault();

		if(rowManager.displayRowsCount){
			if(newPos <= scrollMax){
				rowManager.element.scrollTop = newPos;
			}else{
				rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount - 1]);
			}
		}

		this.table.element.focus();

	},
	scrollToStart:function(e){
		var rowManager = this.table.rowManager;

		e.preventDefault();

		if(rowManager.displayRowsCount){
			rowManager.scrollToRow(rowManager.getDisplayRows()[0]);
		}

		this.table.element.focus();
	},
	scrollToEnd:function(e){
		var rowManager = this.table.rowManager;

		e.preventDefault();

		if(rowManager.displayRowsCount){
			rowManager.scrollToRow(rowManager.getDisplayRows()[rowManager.displayRowsCount - 1]);
		}

		this.table.element.focus();
	},
	navPrev:function(e){
		this.dispatch("keybinding-nav-prev", e);
	},

	navNext:function(e){
		this.dispatch("keybinding-nav-next", e);
	},

	navLeft:function(e){
		this.dispatch("keybinding-nav-left", e);
	},

	navRight:function(e){
		this.dispatch("keybinding-nav-right", e);
	},

	navUp:function(e){
		this.dispatch("keybinding-nav-up", e);
	},

	navDown:function(e){
		this.dispatch("keybinding-nav-down", e);
	},

	navLeftAlt: function(e){
		this.dispatch("keybinding-nav-left-alt", e);
	},

	navRightAlt: function(e){
		this.dispatch("keybinding-nav-right-alt", e);
	},

	navUpAlt: function(e){
		this.dispatch("keybinding-nav-up-alt", e);
	},

	navDownAlt: function(e){
		this.dispatch("keybinding-nav-down-alt", e);
	},

	expandLeft:function(e){
		this.dispatch("keybinding-expand-left", e);
	},

	expandRight:function(e){
		this.dispatch("keybinding-expand-right", e);
	},

	expandUp:function(e){
		this.dispatch("keybinding-expand-up", e);
	},

	expandDown:function(e){
		this.dispatch("keybinding-expand-down", e);
	},

	expandLeftAlt: function(e){
		this.dispatch("keybinding-expand-left-alt", e);
	},

	expandRightAlt: function(e){
		this.dispatch("keybinding-expand-right-alt", e);
	},

	expandUpAlt: function(e){
		this.dispatch("keybinding-expand-up-alt", e);
	},

	expandDownAlt: function(e){
		this.dispatch("keybinding-expand-down-alt", e);
	},

	undo:function(e){
		var cell = false;
		if(this.table.options.history && this.table.modExists("history") && this.table.modExists("edit")){

			cell = this.table.modules.edit.currentCell;

			if(!cell){
				e.preventDefault();
				this.table.modules.history.undo();
			}
		}
	},

	redo:function(e){
		var cell = false;
		if(this.table.options.history && this.table.modExists("history") && this.table.modExists("edit")){

			cell = this.table.modules.edit.currentCell;

			if(!cell){
				e.preventDefault();
				this.table.modules.history.redo();
			}
		}
	},

	copyToClipboard:function(e){
		if(!this.table.modules.edit.currentCell){
			if(this.table.modExists("clipboard", true)){
				this.table.modules.clipboard.copy(false, true);
			}
		}
	},
};