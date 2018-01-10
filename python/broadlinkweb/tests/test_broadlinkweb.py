import unittest

import broadlinkweb


class BroadlinkwebTestCase(unittest.TestCase):

    def setUp(self):
        self.app = broadlinkweb.app.test_client()

    def test_index(self):
        rv = self.app.get('/')
        self.assertIn('Welcome to broadlink-web', rv.data.decode())


if __name__ == '__main__':
    unittest.main()
