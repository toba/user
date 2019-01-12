/**
 * @see https://developers.google.com/identity/protocols/googlescopes
 */
export enum AccessTo {
   ViewProfile = 'https://www.googleapis.com/auth/userinfo.profile', //'profile',
   ViewEmailAddress = 'https://www.googleapis.com/auth/userinfo.email', //'email',
   EditCalendarEvents = 'https://www.googleapis.com/auth/calendar.events',
   ViewCalendarEvents = 'https://www.googleapis.com/auth/calendar.events.readonly',
   ViewCalendars = 'https://www.googleapis.com/auth/calendar.readonly',
   ViewCalendarSettings = 'https://www.googleapis.com/auth/calendar.settings.readonly',
   EditDriveFiles = 'https://www.googleapis.com/auth/drive.file',
   EditDriveMetadata = 'https://www.googleapis.com/auth/drive.metadata',
   ViewDriveMetadata = 'https://www.googleapis.com/auth/drive.metadata.readonly',
   ViewDrivePhotos = 'https://www.googleapis.com/auth/drive.photos.readonly',
   ViewDriveFiles = 'https://www.googleapis.com/auth/drive.readonly',
   ViewContacts = 'https://www.googleapis.com/auth/contacts.readonly',
   ViewBirthDate = 'https://www.googleapis.com/auth/user.birthday.read',
   ViewStreetAddress = 'https://www.googleapis.com/auth/user.addresses.read'
}

export const defaultAccess: AccessTo[] = [];
