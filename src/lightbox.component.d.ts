import { AfterViewInit, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IAlbum, LightboxEvent, LightboxWindowRef } from './lightbox-event.service';
export declare class LightboxComponent implements OnInit, AfterViewInit, OnDestroy, OnInit {
    private _elemRef;
    private _rendererRef;
    private _lightboxEvent;
    _lightboxElem: ElementRef;
    private _lightboxWindowRef;
    private _sanitizer;
    album: Array<IAlbum>;
    currentImageIndex: number;
    options: any;
    cmpRef: any;
    _outerContainerElem: ElementRef;
    _containerElem: ElementRef;
    _leftArrowElem: ElementRef;
    _rightArrowElem: ElementRef;
    _navArrowElem: ElementRef;
    _dataContainerElem: ElementRef;
    _imageElem: ElementRef;
    _captionElem: ElementRef;
    _numberElem: ElementRef;
    content: any;
    ui: any;
    private _cssValue;
    private _event;
    private _windowRef;
    private _documentRef;
    private rotate;
    constructor(_elemRef: ElementRef, _rendererRef: Renderer2, _lightboxEvent: LightboxEvent, _lightboxElem: ElementRef, _lightboxWindowRef: LightboxWindowRef, _sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    close($event: any): void;
    control($event: any): void;
    private _rotateContainer;
    private _resetImage;
    private _calcTransformPoint;
    nextImage(): void;
    prevImage(): void;
    private _validateInputData;
    private _registerImageLoadingEvent;
    /**
     * Fire when the image is loaded
     */
    private _onLoadImageSuccess;
    private _centerVertically;
    private _sizeContainer;
    private _postResize;
    private _showImage;
    private _prepareComponent;
    private _positionLightBox;
    /**
     * addCssAnimation add css3 classes for animate lightbox
     */
    private _addCssAnimation;
    private _end;
    private _updateDetails;
    private _albumLabel;
    private _changeImage;
    private _hideImage;
    private _updateNav;
    private _showLeftArrowNav;
    private _showRightArrowNav;
    private _showArrowNav;
    private _enableKeyboardNav;
    private _disableKeyboardNav;
    private _keyboardAction;
    private _getCssStyleValue;
    private _onReceivedEvent;
}
