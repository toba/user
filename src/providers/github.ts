/**
 * Setting no scope grants read-only access to public information (includes
 * public user profile info, public repository info, and gists).
 * @see https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
 */
export enum AccessTo {
   /**
    * Grants read/write access to code, commit statuses, invitations,
    * collaborators, adding team memberships, and deployment statuses for public
    * and private repositories and organizations.
    */
   EditRepos = 'repo',
   /**
    * Grants access to deployment statuses for public and private repositories.
    * This scope is only necessary to grant other users or services access to
    * deployment statuses, *without* granting access to the code.
    */
   ViewDeploymentStatus = 'repo_deployment',
   /**
    * Grants read/write access to code, commit statuses, collaborators, and
    * deployment statuses for public repositories and organizations. Also
    * required for starring public repositories.
    */
   EditPublicRepos = 'public_repo',
   /**
    * Grants read/write access to profile info only. Note that this scope
    * includes `user:email` and `user:follow`.
    */
   EditProfile = 'user',
   /**
    * Grants access to read a user's profile data.
    */
   ViewProfile = 'read:user',
   /**
    * Grants read access to a user's email addresses.
    */
   ViewEmailAddress = 'user:email',
   /**
    * Grants access to follow or unfollow other users.
    */
   EditFollowing = 'user:follow',
   /**
    * Grants write access to gists.
    */
   EditGist = 'gist',
   /**
    * Grants read access to a user's notifications. `repo` also provides this
    * access.
    */
   ViewNotifications = 'notifications'
}

export const defaultAccess: AccessTo[] = [];
