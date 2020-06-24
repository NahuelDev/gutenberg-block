const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText, InspectorControls } = wp.blockEditor;
const { Button, PanelBody, FormToggle } = wp.components;

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
        }
    },
    edit: props => {
        const { attributes: { heroBgImage, heroTitle, heroText, hasText }, setAttributes } = props;

        const onSelectImage = newImage => {
            setAttributes({ heroBgImage : newImage.sizes.full.url });
        }
        const onChangeHeroTitle = heroTitle => {
            setAttributes({ heroTitle });
        }
        const onChangeHeroText = heroText => {
            setAttributes({ heroText });
        }
        const onChangeHasText = (hasTextValue) => {
            setAttributes({hasText: !hasText});
        }
        
        return(
            <>
                <InspectorControls>
                <PanelBody
                        title={'Ajustes del bloque'}
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
                        </PanelBody>
                </InspectorControls>
                <div className="hero-content"
                    style={{ backgroundImage : `url( ${heroBgImage} )` }}
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
                </div>
            </>
        )
    },
    save: props => {

        // extraer los valores
        const { attributes: { heroBgImage, heroTitle, heroText, hasText } } = props;

        return(
            <div 
            className="hero-content"
            style={{ backgroundImage : `url(${heroBgImage})`}}
            >
                    <h1 className="titulo">
                        <RichText.Content value={heroTitle} />
                    </h1>
                    {hasText &&
                    <p>
                        <RichText.Content value={heroText} />
                    </p>}
            </div>
        )
    }
})