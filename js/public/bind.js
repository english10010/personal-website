$(document).on('click','[data-action]',function(e){
    if( !$(this).attr('type') || ['checkbox','radio'].indexOf( $(this).attr('type') ) === -1 ){
        e.preventDefault();
    }
    e.stopPropagation();
    var name = $(this).attr('data-action');
    if( $.isFunction( events[name] ) ){
        return events[name].call( this,e );
    }
    return;
});
