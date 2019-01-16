# Custom errors

This project is meant as a quick and dirty way of deploying custom errors for my
various web sites. It's also an excuse to play with another static site generation tool,
learn a few things about JavaScript development culture, and try to do things the opposite
of the easy way (which for me means doing stuff in a language like Ruby, Java or C#, which
are all languages I've spent far more time in).

## Project status

It's not done yet. I'm not even using it yet. Right now the only interesting bit of
code is the `lib/metalsmith/targets.js` section, which is an inline plugin for metalsmith
that I may extract when I know what I need it to do. Basically it retargets all metalsmith
file objects in a new subdirectory, allowing site-specific customizations. Additionally,
there's an initial stab at uploading to S3.

### Todo list
- Generate actual custom CSS
- Finish the templates
- Automatically update the CustomErrorResponse configuration for Cloudfront

MAYBE TODO

## Project goals

* Generate and build some gently customized HTTP error pages
* Push content to S3 Buckets
* Update cloudfront distributions to point to those error pages, if needed.

## Usage

Set up `src/sites.yaml` with the overrides you need.

To enable uploading to S3, set environment variables for S3, either in your shell, or, as I do, with a .env file,
or the AWS library should pick up your default credentials from `~/.aws/credentials`

Environment
 
```
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
AWS_DEFAULT_BUCKET=your_bucket
AWS_REGION=your_aws_region
```

Commands
```bash
yarn install
yarn build
yarn upload #upload to s3. Currently not very smart, just sends every file regadless of changes
yarn update-distribution #TODO
yarn deploy #TODO, should be a composite of upload/update-distribution
```

## Development

Assuming you have Node 10 or later installed and Yarn, start with
`yarn install`.

## Contributing

While this project is mainly meant for my personal use, in the unlikely event there's
any interest in it I'm happy to take pull requests and to make it more suitable for general
use.
   
Bug reports and pull requests are welcome on GitHub at https://github.com/JasonTrue/custom-errors.
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to
the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

1. Fork it.
2. Create a topic branch `git checkout -b my_branch`
3. Commit your changes `git commit -am "Added snazzle feature"`
3. Push to your branch `git push origin my_branch`
4. Send a [pull request](https://github.com/JasonTrue/custom-errors/pulls)

## License

Available under the terms of the [MIT license](https://github.com/JasonTrue/custom-errors/blob/master/LICENSE.txt),
if any of the code is useful for you. &copy; 2019 Jason Truesdell. 
