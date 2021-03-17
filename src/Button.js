import React from 'react';

const Button = ({content, buttonAparience,disableClass}) => {
    return (
        <a href="!#" class={`btn btn-${buttonAparience} btn-lg ${disableClass}`} tabindex="-1" role="button" aria-disabled="true">{content}</a>
    )
}

export default Button;
