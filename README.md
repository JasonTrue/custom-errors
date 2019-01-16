# Custom errors

This project is meant as a quick and dirty way of deploying custom errors for my
various web sites. It's also an excuse to play with another static site generation tool,
learn a few things about JavaScript development culture, and try to do things the opposite
of the easy way (which for me means doing stuff in a language like Ruby, Java or C#, which
are all languages I've spent far more time in).

# Project status

It's not done yet. I'm not even using it yet. Right now the only interesting bit of
code is the `lib/metalsmith/targets.js` section, which is an inline plugin for metalsmith
that I may extract when I know what I need it to do. Basically it retargets all metalsmith
file objects in a new subdirectory, allowing site-specific customizations.

# Project goals

* Generate and build some gently customized HTTP error pages
* Push content to S3 Buckets
* Update cloudfront distributions to point to those error pages, if needed.

# Usage

Set up `src/sites.yaml` with the overrides you need.

Set environment variables for S3, either in your shell, or, as I do, with a .env file,
or the AWS library should pick up your default credentials from `~/.aws/credentials`
 
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
AWS_DEFAULT_BUCKET=your_bucket
AWS_REGION=your_aws_region

```bash
yarn install
yarn build
yarn upload #upload to s3. Currently not very smart, just sends every file regadless of changes
yarn update-distribution #TODO
yarn deploy #TODO, should be a composit of upload/update-distribution
```

# License

MIT
