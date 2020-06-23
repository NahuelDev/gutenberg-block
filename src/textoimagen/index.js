const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette, MediaUpload, URLInputButton,
AlignmentToolbar } = wp.blockEditor;
const { PanelBody, Button, FormToggle } = wp.components;

//Logo para el bloque
import { ReactComponent as Logo } from '../manzana.svg';

registerBlockType( 'manzanita/textoimagen', {
    title: 'Texto-Imagen',
    icon: {src: Logo},
    category: 'manzanita-gutenberg',
    attributes: {
        imagen: {
            type: 'string',
            source:'attribute',
            selector: '.i-content img',
            attribute: 'src'
        },
        titulo:{
            type: 'string',
            source: 'html',
            selector: '.t-content h1'
        },
        texto:{
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
        hasButton:{
            type: 'boolean',
            default: true
        },
        urlButton:{
            type:'string'
        },
        buttonText:{
            type:'string'
        }

    },
    edit: (props) => {

        const {attributes: { imagen, titulo, texto, textColor, bgColor, hasButton, urlButton, buttonText }, setAttributes } = props;

        const onSeleccionarImagen = (nuevaImagen) => {
            setAttributes({imagen: nuevaImagen.sizes.full.url})
        }
        
        const onChangeTitulo = (titulo) => {
            setAttributes({titulo})
        }

        const onChangeTexto = (texto) => {
            setAttributes({texto})
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

        const onChangeButtonText = (buttonText) => {
            setAttributes({buttonText})
        }
        const onChangeURL = (urlButton) => {
            setAttributes({urlButton})
        }
        
        
        return(
            <>
                <InspectorControls>
                        <PanelBody
                        title={'Ajustes de color'}
                        initialOpen={true}>
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
                        >
                            <div className="components-base-control">
                                <div className="components-base-control__field">
                                    <label className="components-base-control__label">¿Agregar botón debajo del texto?</label>
                                </div>
                                <FormToggle
                                onChange={onChangeButton}
                                checked={hasButton}
                                />
                            </div>
                        </PanelBody>
                </InspectorControls>
                <div className='it-content'>
                    <div className='t-content' style={{backgroundColor:bgColor, 
                                                        color:textColor}}>
                            <h1>
                                <RichText 
                                    placeholder='Agrega el título'
                                    onChange={onChangeTitulo}
                                    value={titulo}
                                />
                            </h1>
                            <p>
                                <RichText
                                    placeholder='Agregar texto'
                                    onChange={onChangeTexto}
                                    value={texto}
                                />
                            </p>

                            { hasButton && 
                            <>
                                <div>
                                    <a href={urlButton}>
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
                            </>
                            }
                    </div>
                    <div className='i-content'>
                        <img src={imagen}/>
                    <MediaUpload
                        onSelect={onSeleccionarImagen}
                        type='image'
                        render={({open}) => (
                            <Button
                                className='manzanita-agregar-imagen'
                                onClick={open}
                                icon="format-image"
                                showTooltip='true'
                                label='Cambiar Imagen'
                            />
                        )}
                    />
                    </div>
                </div>
            </>
        )
    },
    save: (props) => {
        const {attributes: { imagen, titulo, texto, textColor, bgColor } } = props;
        return(
            <div>
                <div className='it-content ti' style={{backgroundColor:bgColor}}>
                    <div className='t-content' style={{color:textColor}}>
                            <h1>
                                <RichText.Content value={titulo} />
                            </h1>
                            <p>
                                <RichText.Content value={texto} />
                            </p>
                    </div>
                    <div className='i-content'>
                        <img src={imagen}/>
                    </div>
                </div>
            </div>
        )
    }
});