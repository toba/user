/**
 * OAuth scopes.
 * @see https://developers.facebook.com/docs/facebook-login/permissions/
 */
export enum AccessTo {
   /**
    * Grant access to default profile fields.
    *
    * - id
    * - first_name
    * - last_name
    * - middle_name
    * - name
    * - name_format
    * - picture
    * - short_name
    *
    * Does not require App Review.
    * @see https://developers.facebook.com/docs/facebook-login/permissions/#reference-default
    */
   Profile = 'public_profile',
   /**
    * Grant access to user's primary e-mail. Does not require App Review.
    * @see https://developers.facebook.com/docs/facebook-login/permissions/#reference-email
    */
   Email = 'email',
   Likes = 'user_likes',
   Friends = 'user_friends'
}

export const defaultAccess: AccessTo[] = [];
