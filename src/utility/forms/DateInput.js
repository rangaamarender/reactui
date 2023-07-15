import React from 'react';
import { IMask, useIMask } from 'react-imask';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Form, FormControl } from 'react-bootstrap';

dayjs.extend(advancedFormat);
dayjs.extend(customParseFormat);

const format = 'MM/DD/YYYY';
const pattern = 'MM/`DD/`YYYY';

const blocks = {
  date: {
    mask: IMask.MaskedRange,
    placeholderChar: 'D',
    from: 1,
    to: 31,
    maxLength: 2
  },
  month: {
    mask: IMask.MaskedRange,
    placeholderChar: 'M',
    from: 1,
    to: 12,
    maxLength: 2
  },
  year: {
    mask: IMask.MaskedRange,
    placeholderChar: 'Y',
    from: 1900,
    to: 9999
  }
};

const imaskOptions = {
  mask: Date,
  pattern,
  lazy: false,
  autofix: true,
  overwrite: true,
  blocks: {
    DD: blocks.date,
    MM: blocks.month,
    YYYY: blocks.year
  },
  format: function (date) {
    return dayjs(date).format(format);
  },
  parse: function (string) {
    return dayjs(string, format).toDate();
  }
};

export const DateMask = () => {
  const { ref } = useIMask(imaskOptions, {
    onAccept: (value, mask) => {
      console.log(value, mask.unmaskedValue, mask.typedValue);
    }
  });

  return (
    <Form.Control
      type="date"
      ref={(inputRef) => {
        if (inputRef) {
          ref.current = inputRef;
        }
      }}
    />
  );
};
