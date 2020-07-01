const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, InspectorControls, ColorPalette, URLInputButton } = wp.blockEditor;
const { Button, PanelBody, FormToggle  } = wp.components;

import { ReactComponent as Logo } from '../manzana.svg';

registerBlockType('manzanita/hero', {
    title: 'Imagen Principal',
    icon: { src: Logo},
    category: 'manzanita-gutenberg', 
    attributes: {
        heroBgImage: {
            type: 'string', 
            selector: '.hero-content'
        }, 
        heroTitle: {
            type: 'string',
            source: 'html', 
            selector: '.hero-content h1'
        },
        heroText: {
            type: 'string',
            source: 'html', 
            selector: '.hero-content p'
        },
        hasText:{
            type:'boolean',
            default:true
        },
        buttonText:{
            type:'string'
        },
        textColor:{
            type:'string'
        },
        buttonBgColor:{
            type:'string',
        },
        hasButton:{
            type:'boolean',
            default:true
        },
        buttonUrl:{
            type:'string'
        },
    },
    edit: props => {
        const { attributes: { heroBgImage, heroTitle, heroText, hasText, buttonText, textColor, 
            buttonBgColor,buttonUrl, hasButton }, setAttributes } = props;

        /* Imagen texto del hero */

        const onSelectImage = newImage => {
            setAttributes({ heroBgImage : newImage.sizes.full.url });
        }
        const onChangeHeroTitle = heroTitle => {
            setAttributes({ heroTitle });
        }
        const onChangeHeroText = heroText => {
            setAttributes({ heroText });
        }

        //InspectorControls

        const onChangeHasText = (hasTextValue) => {
            setAttributes({hasText: !hasText});
        }

        /* Botón */

        const onChangeButtonText = (buttonText) => {
            setAttributes({buttonText})
        }

        const onChangeURL = (buttonUrl) => {
            setAttributes({buttonUrl})
        }

        //InspectorControls

        const onChangeTextColor = (textColor) => {
            setAttributes({textColor})
        }

        const onChangeButtonBgColor = (buttonBgColor) => {
            setAttributes({buttonBgColor})
        }

        const onChangeHasButton = (hasButtonValue) => {
            setAttributes({hasButton:!hasButton});
        }
        
        
        
        return(
            <>
                <InspectorControls>
                <PanelBody
                    title={'Ajustes de alineación'}
                    initialOpen={false}
                    >
                        <div className="components-toolbar">
                            
                        </div>
                    </PanelBody>
                    <PanelBody
                    title={'Ajustes del texto'}
                    initialOpen={true}
                    >
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <label className="components-base-control__label">¿Agregar texto?</label>
                            </div>
                                <FormToggle
                                onChange={onChangeHasText}
                                checked={hasText}
                                />
                        </div>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <label className="components-base-control__label">Color del texto del botón</label>
                            </div>
                                <ColorPalette
                                value = { textColor }
                                onChange = { onChangeTextColor }
                                />
                        </div>
                    </PanelBody>
                    <PanelBody
                    title={'Ajustes del botón'}
                    initialOpen={false}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <label className="components-base-control__label">¿Agregar botón?</label>
                            </div>
                                <FormToggle
                                onChange={onChangeHasButton}
                                checked={hasButton}
                                />
                        </div>
                        
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <label className="components-base-control__label">Color del fondo del botón</label>
                            </div>
                                <ColorPalette
                                value = { buttonBgColor }
                                onChange = { onChangeButtonBgColor }
                                />
                        </div>
                        
                    </PanelBody>
                </InspectorControls>
                
                <div className="hero-content"
                    style={{ backgroundImage : `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url( ${heroBgImage} )` }}
                >
                    <MediaUpload
                        onSelect={onSelectImage}
                        type="image"
                        render={({ open }) => (
                            <Button 
                                onClick={open}
                                icon="format-image"
                                showTooltip="true"
                                label="Cambiar Imagen"
                            />
                        ) }
                    />
                        <div className='hero-inside' style={{color:textColor}}>
                            <h1>
                                <RichText 
                                    placeholder={'Agrega el Titulo..'}
                                    onChange={onChangeHeroTitle}
                                    value={heroTitle}
                                />
                            </h1>
                            {hasText && 
                            <p>
                                <RichText 
                                    placeholder={'Agrega el Texto..'}
                                    onChange={onChangeHeroText}
                                    value={heroText}
                                />
                            </p>}

                            {hasButton &&
                            <>
                                <a className='btnUrl' href={buttonUrl} style={{backgroundColor:buttonBgColor,color:textColor}}>
                                    <RichText 
                                    placeholder='Agregar texto'
                                    onChange={onChangeButtonText}
                                    value={buttonText}
                                    />
                                </a>
                                <URLInputButton
                                onChange={onChangeURL}
                                url={buttonUrl}
                                />
                            </>}
                        </div>
                </div>
            </>
        )
    },
    save: props => {

        const { attributes: { heroBgImage, heroTitle, heroText, hasText, buttonText, textColor, 
            buttonBgColor,buttonUrl, hasButton } } = props;

        return(
            <div className="hero-content"
                    style={{ backgroundImage : `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url( ${heroBgImage} )` }}
                >
                        <div className='hero-inside' style={{color:textColor}}>
                            <h1>
                                <RichText.Content value={heroTitle} />
                            </h1>
                            {hasText && 
                            <p>
                                <RichText.Content value={heroText} />
                            </p>}

                            {hasButton &&
                                <a className='btnUrl' href={buttonUrl} style={{backgroundColor:buttonBgColor,color:textColor}}>
                                    <RichText.Content value={buttonText} />
                                </a>}
                        </div>
                </div>
        )
    }
})