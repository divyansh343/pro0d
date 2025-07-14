/**
 * Component displaying credits for this website.
 *
 * **WARNING**: Removing this code violates the license agreement.
 * Any modifications to this code without proper attribution will
 * expose you to legal risks.
 *
 * If you have any doubts about the usage of this code, please
 * contact the author for clarification, by [filing an issue](https://github.com/BSoDium/bsodium.fr/issues/new).
 *
 * *Don't be an asshole, give credit where it's due.*
 */
export default function Copyright() {

  const isAuthorDomain = ["bsodium.fr", "www.bsodium.fr"].includes(
    window.location.hostname
  );

  return isAuthorDomain ? null : null
}
