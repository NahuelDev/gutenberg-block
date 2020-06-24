const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, URLInputButton } = wp.blockEditor;
const { PanelBody, Button, FormToggle } = wp.components;

//Logo para el bloque
import { ReactComponent as Logo } from '../manzana.svg';

registerBlockType( 'manzanita/textoimagen', {
    title: 'Texto-Imagen',
    icon: {src: Logo},
    category: 'manzanita-gutenberg',
    attributes: {
        image: {
            type: 'string',
            source:'attribute',
            selector: '.i-content img',
            attribute: 'src'
        },
        title:{
            type: 'string',
            source: 'html',
            selector: '.t-content h1'
        },
        text:{
            type: 'string',
            source: 'html',
            selector: '.t-content p'
        },
        textColor:{
            type:'string'
        },
        bgColor: {
            type:'string'
        },
        buttonBgColor :{
            type:'string'
        },
        hasButton:{
            type: 'boolean',
            default: true
        },
        urlButton:{
            type:'string'
        },
        buttonText:{
            type:'string'
        },
        isRightButton: {
            type: 'boolean',
            default:false
        },
        isRightTextBlock:{
            type: 'boolean',
            default: false
        }

    },
    edit: (props) => {

        const {attributes: { image, title, text, textColor, bgColor, hasButton, urlButton, buttonText, buttonBgColor,
            isRightButton, isRightTextBlock }, setAttributes } = props;

        const onSeleccionarImage = (newImage) => {
            setAttributes({image: newImage.sizes.full.url})
        }
        
        const onChangeTitle = (title) => {
            setAttributes({title})
        }

        const onChangeText = (text) => {
            setAttributes({text})
        }

        const onBgColor = (bgColor) => {
            setAttributes({bgColor});
        }

        const onTextColor = (textColor) => {
            setAttributes({textColor})
        }

        const onChangeButton = (hasButtonValue) => {
            setAttributes({ hasButton : !hasButton})
        }

        const onChangeButtonBgColor = (buttonBgColor) => {
            setAttributes({buttonBgColor});
        }
        
        const onChangeButtonText = (buttonText) => {
            setAttributes({buttonText})
        }
        const onChangeURL = (urlButton) => {
            setAttributes({urlButton})
        }

        const onChangeAlignButton = (hasButtonAlign) => {
            setAttributes({isRightButton: !isRightButton})
        }

        const onChangeBlock = (hasBlockAlign) => {
            setAttributes({isRightTextBlock: !isRightTextBlock})
        }

        const tContent = <div className='t-content' style={{backgroundColor:bgColor, 
                                                            color:textColor}}>
                            <h1>
                                <RichText 
                                placeholder='Agrega el título'
                                onChange={onChangeTitle}
                                value={title}
                                />
                            </h1>
                            <p>
                                <RichText
                                placeholder='Agregar texto'
                                onChange={onChangeText}
                                value={text}
                                />
                            </p>

                            { hasButton &&
                                <div style={{textAlign: (isRightButton && 'right') || 'left'}}>
                                    <div style={{borderColor:textColor}}>
                                        <a className='btnUrl' href={urlButton} style={{backgroundColor:buttonBgColor,color:textColor}}>
                                            <RichText 
                                            placeholder='Agregar texto'
                                            onChange={onChangeButtonText}
                                            value={buttonText}
                                            />
                                        </a>
                                    </div>
                                    <URLInputButton
                                    onChange={onChangeURL}
                                    url={urlButton}
                                    />
                                </div>    
                                }
                         </div>;

        const iContent = <div className='i-content'>
                            <img src={image}/>
                            <MediaUpload
                            onSelect={onSeleccionarImage}
                            type='image'
                            render={({open}) => (
                                <Button
                                    onClick={open}
                                    icon="format-image"
                                    showTooltip='true'
                                    label='Cambiar Imagen'
                                />
                            )}
                            />
                        </div>;

        return(
            <>
                <InspectorControls>
                        <PanelBody
                        title={'Ajustes del bloque'}
                        initialOpen={true}
                        >
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label">¿Texto a la derecha?</label>
                                </div>
                                    <FormToggle
                                    onChange={onChangeBlock}
                                    checked={isRightTextBlock}
                                    />
                            </div>
                        </PanelBody>
                        <PanelBody
                        title={'Ajustes de color'}
                        initialOpen={false}>
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label">Color de Fondo</label>
                                </div>
                                <ColorPalette 
                                    value={ bgColor }
                                    onChange = {onBgColor}
                                />
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label">Color del texto</label>
                                </div>
                                <ColorPalette
                                    value = { textColor }
                                    onChange = { onTextColor }
                                />
                            </div>
                        </PanelBody>
                        <PanelBody
                        title='Ajustes del botón'
                        initialOpen={false}
                        >
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label">Color del fondo del botón</label>
                                </div>
                                <ColorPalette
                                    value = { buttonBgColor }
                                    onChange = { onChangeButtonBgColor }
                                />
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label">¿Agregar botón debajo del texto?</label>
                                </div>
                                <FormToggle
                                onChange={onChangeButton}
                                checked={hasButton}
                                />
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label">¿Botón a la derecha?</label>
                                </div>
                                <FormToggle
                                onChange={onChangeAlignButton}
                                checked={isRightButton}
                                />
                            </div>
                        </PanelBody>
                </InspectorControls>
                <div className='it-content'>
                    {
                        (isRightTextBlock && <>
                                                {iContent}
                                                {tContent}
                                             </>) 
                                        || 
                                        <>
                                            {tContent}
                                            {iContent}
                                        </>
                    }
                </div>
            </>
        )
    },
    save: (props) => {
        const {attributes: { image, title, text, textColor, bgColor, hasButton, urlButton, buttonText, buttonBgColor,
            isRightButton, isRightTextBlock }} = props;

        const tContent =  <div className='t-content' style={{color:textColor}}>
                                <h1>
                                    <RichText.Content value={title} />
                                </h1>
                                <p>
                                    <RichText.Content value={text} />
                                </p>
                            { hasButton && 
                            <div style={{borderColor:textColor, textAlign: (isRightButton && 'right') || 'left'}}>
                                <a className='btnUrl' href={urlButton} style={{color:textColor, backgroundColor:buttonBgColor}}>
                                    <RichText.Content value={buttonText} />
                                </a>
                            </div>
                            }
                        </div>;
        const iContent = <div className='i-content'>
                            <img src={image}/>
                        </div>;
        return(
            <div>
                <div className={'it-content' + (!isRightTextBlock ? ' ti' : ' ')} style={{backgroundColor:bgColor}}>
                   {
                        (isRightTextBlock && <>
                                                {iContent}
                                                {tContent}
                                             </>) 
                                        || 
                                        <>
                                            {tContent}
                                            {iContent}
                                        </>
                    }
                </div>
            </div>
        )
    }
});