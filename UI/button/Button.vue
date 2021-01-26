<template>
  <button
    :class="[`${axuiPrefix}btn`,
    `${axuiPrefix}btn-${buttonStyle}-${color}`,
    shape?`${axuiPrefix}btn-${shape}`:'',
    long?`${axuiPrefix}btn-long`:'']"
  >
    <slot></slot>
  </button>
</template>

<script>
const styles = ["heavy", "light", "dashed", "link"];
const colors = ["default", "info", "primary", "success", "warning", "error"];
const shapes = ["circle", ""]; // ant:round
export default {
  props: {
    buttonStyle: {
      default: "light",
      required: true,
      validator(value) {
        if (styles.includes(value)) {
          return true;
        } else {
          throw new Error(
            `Button's buttonStyle must be one of [${styles.map(
              e => '"' + e + '"'
            )}], but get "${value}"`
          );
        }
      }
    },
    color: {
      default: "default",
      required: true,
      validator(value) {
        if (colors.includes(value)) {
          return true;
        } else {
          throw new Error(
            `Button's color must be one of [${colors.map(
              e => '"' + e + '"'
            )}], but get "${value}"`
          );
        }
      }
    },
    shape: {
      default: "",
      required: false,
      validator(value) {
        if (shapes.includes(value)) {
          return true;
        } else {
          throw new Error(
            `Button's shape must be one of [${shapes.map(
              e => '"' + e + '"'
            )}], but get "${value}"`
          );
        }
      }
    },
    long: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="less">
@import "../theme.less";

.@{ui-prefix}btn {
  cursor: pointer;
  padding: 0.5em 1em;
  outline: 0;
  border-radius: 0.25em;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: inherit;
  color: white;
  transition: all @transition-time;
  font: inherit;
}

.@{ui-prefix}btn:disabled {
  cursor: not-allowed;
}

.@{ui-prefix}btn-circle {
  border-radius: 2em;
}

.@{ui-prefix}btn-long {
  width: 100%;
}

// ****************************** buttonStyles and colors**************************************
.add-btn(@colorName, @realcolor) {
  .mute-border-when-default() when (@realcolor =@default-color) {
    border-color: @mute-color;
  }

  .hope-mix-heavy(@lighten) {
    background-color: lighten(@realcolor, @lighten);
  }

  .hope-mix-light(@lighten) {
    border-color: lighten(@realcolor, @lighten);
    color: lighten(@realcolor, @lighten);
    .mute-border-when-default();
  }

  .status-styles(@status, @lighten) {
    @classSuffix: ~"@{colorName}:@{status}";

    .shadow-when-active() when (@status =active) {
      box-shadow: @active-shadow;
    }

    .@{ui-prefix}btn-light-@{classSuffix},
    .@{ui-prefix}btn-dashed-@{classSuffix} {
      .hope-mix-light(@lighten);
      .shadow-when-active();
    }

    .@{ui-prefix}btn-link-@{classSuffix} {
      .hope-mix-light(@lighten);
    }

    .@{ui-prefix}btn-heavy-@{classSuffix} {
      .hope-mix-heavy(@lighten);
      .shadow-when-active();
    }
  }

  .status-styles() {
    .@{ui-prefix}btn-light-@{colorName} {
      .hope-mix-light(0);
    }

    .@{ui-prefix}btn-dashed-@{colorName} {
      .hope-mix-light(0);
      border-style: dashed;
    }

    .@{ui-prefix}btn-link-@{colorName} {
      .hope-mix-light(0);
      border-color: transparent !important;
    }

    .@{ui-prefix}btn-heavy-@{colorName} {
      .hope-mix-heavy(0);
    }
  }

  .status-styles();
  .status-styles(hover, @hover-lighten);
  .status-styles(active, @active-lighten);
  .status-styles(disabled, @disabled-lighten);
}

@colorThemes: primary, @primary-color, info, @info-color, warning,
  @warning-color, success, @success-color, error, @error-color, default,
  @default-color;

.loopColor(@i) when (@i <length(@colorThemes)) {
  @colorName: extract(@colorThemes, @i);
  @realcolor: extract(@colorThemes, @i+1);
  .add-btn(@colorName, @realcolor);
  .loopColor(@i+2);
}

.loopColor(1);
</style>