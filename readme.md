This pipe are been created with `npx create-pipe {pipe-name}`

# Install

Clone repo, go to pipe folder that you want install.

Install deps:

```
npm install
```

Install pipe globally

```
npm install -g
```

Or generate binary:

```
npm run build
```

Then copy dist/{pipe} to your PATH.

# Usage

Upper pipe:

```
echo Test | upper
> TEST
```

Lower pipe:

```
echo Test | lower
> test
```

Grop pipe:

```
echo Test | grop t
> test (with red T)
```

Combine:

```
echo test | upper | grop T
```
