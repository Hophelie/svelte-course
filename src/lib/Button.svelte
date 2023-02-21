<script>
 export let size = "medium";
 export let shadow = false;
 export let bgColor = 'undifined';
 export let textColor = 'undifined';



 let isLeftHovered ;
</script>

<button on:click
        
        style:--buttonBgColor={bgColor}
        style:--buttonTextColor={textColor}
        class:size-lg={size == 'large'}
        class:size-md={size == 'medium'}
        class:size-sm={size == 'small'}
        class:shadow
        class:has-left={$$slots.leftContent}
        {...$$restProps}
        >

        {#if $$slots.leftContent}
        <div class="left-content" on:mouseenter={()=>(isLeftHovered = true)} on:mouseleave={()=>(isLeftHovered = false)}><slot name="leftContent"></slot></div>
        {/if}
        <slot {isLeftHovered}>caca</slot></button> 

<style lang="scss">
    
    button{
        padding: 15px 20px ;
        border: none;
        background-color:var(--buttonBgColor);
        color:var(--buttonTextColor);
        width: 100%;

        justify-content: center;
        padding: 1rem;
        cursor: pointer;
        padding: 0.7rem 0.9rem;
        border:none;
        background-color: #b5c7ff;
        color: #ffffff;
        border-radius: 10px;
        // background: linear-gradient(145deg, white, #6d90ff);
        box-shadow:  8px 8px 9px #b4c2d9,
             -8px -8px 9px #f8fdff;
        
        .left-content{
            margin-right: 10px;
        }
        &:disabled{
            
            background-color:#e5eefe;
            color: rgb(195, 198, 212);
            cursor: not-allowed;
        }
      
        
        &.size-sm{
            font-size: 0.5rem;
        }
        &.size-md{
            font-size: 1rem;
        }
        &.size-lg{
            font-size: 2rem;
        }
        &:hover{
            background-image: #00259d;
        }
        &:active{
            background-image: #b4c6ff;
        }
        &.has-left{
            justify-content: flex-start;
        }
        padding: 0.8em 7em;
        
        
      
        text-align: center;
        
        transition: .2s ease-in-out;
        box-shadow: -3px -3px 14px rgba(255, 255, 255, 0.7),
                    -3px -3px 10px rgba(255, 255, 255, .5),
                    6px 6px 8px rgba(255, 255, 255, .075),
                    6px 6px 10px rgba(0, 0, 0, .15);
        }
        button:hover {
        box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
                    -2px -2px 4px rgba(255, 255, 255, .4),
                    2px 2px 2px rgba(255, 255, 255, .05),
                    2px 2px 4px rgba(0, 0, 0, .1);
        }
        button:active {
        box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
                    inset -2px -2px 4px rgba(255, 255, 255, .5),
                    inset 2px 2px 2px rgba(255, 255, 255, .075),
                    inset 2px 2px 4px rgba(0, 0, 0, .15);
                

            }
    
</style>