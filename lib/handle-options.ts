import * as chalk from 'chalk';
import {log} from './logging';

/////////////////////////////////////////////////////////////////////////////////

export const getIgnore = function (conf, alwaysIgnoreThese) {

  const ignore = (conf.ignore || []).concat(alwaysIgnoreThese)
  .filter(function (item: string, index: number, arr: Array<string>) {
    return arr.indexOf(item) === index;
  }).map(function (item: string) {
    return new RegExp(item);
  });

  if (ignore.length > 0) {
    console.log('\n');
    log.info(chalk.underline('=> NPM Link Up will ignore paths that match any of the following regular expressions => '));
    ignore.forEach(function (item: RegExp) {
      log.warning(`ignored => ${item}`);
    });
  }

  return ignore;

};
